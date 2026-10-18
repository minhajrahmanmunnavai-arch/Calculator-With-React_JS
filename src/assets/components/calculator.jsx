import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [expression, setExpression] = useState('');
    const [firstNumber, setFirstNumber] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleButtonClick = (value) => {
        if (value >= 0 && value <= 9) {
            if (display === '0') {
                setDisplay(value);
            } else {
                setDisplay(display + value);
            }
        }

        if (value === '.') {
            if (!display.includes('.')) {
                setDisplay(display + value)
            } else {
                setDisplay(display === '0' ? value : display + value)
            }
        }

        if (value === '+') {
            setFirstNumber(Number(display));
            setOperator('+');
            setExpression(display + '+');
            setDisplay('0')
        }


        if (value === '=') {
            const secondNumber = Number(display)
            if (operator === '+') {
                const result = firstNumber + secondNumber;
                setExpression(expression + ' ' + secondNumber + '=')
                setDisplay(String(result))
            }
        }

        if (value === '-' && display === '0' && operator === null) {
            setDisplay('-');
            return;
        }

        if (value === '-') {
            setFirstNumber(Number(display));
            setOperator('-');
            setExpression(display + '-');
            setDisplay('0');
            return;
        }

        if (value === '-') {
            setFirstNumber(Number(display));
            setOperator('-');
            setExpression(display + '-')
            setDisplay('0')

        }

        if (value === '=') {
            const secondNumber = Number(display);
            if (operator === '-') {
                const result = firstNumber - secondNumber;
                setExpression(expression + ' ' + secondNumber + '=');
                setDisplay(String(result))
            }
        }

        if (value === '×') {
            setFirstNumber(Number(display));
            setOperator('×');
            setExpression(display + '×')
            setDisplay('0')
        }

        if (value === '=') {
            const secondNumber = Number(display);
            if (operator === '×') {
                const result = firstNumber * secondNumber;
                setExpression(expression + ' ' + secondNumber + '=');
                setDisplay(String(result))
            }
        }

        if (value === '÷') {
            setFirstNumber(Number(display));
            setOperator('÷');
            setExpression(display + '÷')
            setDisplay('0')
        }

        if (value === '=') {
            const secondNumber = Number(display);
            if (operator === '÷') {
                const result = firstNumber / secondNumber;
                setExpression(expression + ' ' + secondNumber + '=');
                setDisplay(String(result))
            }
        }

        if (value === '%') {
            setFirstNumber(Number(display));
            setOperator('%');
            setExpression(display + '%')
            setDisplay('0')
        }

        if (value === '%') {
            const result = Number(display) / 100;

            setExpression(display + '%');
            setDisplay(String(result));
        }


        if (value === '+/-') {
            setDisplay(String(Number(display) * -1))
        }
    };

    const clearDisplay = () => {

        setDisplay('0');
        setExpression('')

    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans antialiased text-white select-none ">
            <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -top-10 -left-10" />
            <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -bottom-10 -right-10" />

            <div className="relative w-full max-w-xs sm:max-w-sm bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 shadow-2xl shadow-black/80 flex flex-col gap-4">

                <div className="flex items-center justify-between px-2 pt-1">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Calc-UI</span>
                    <div className="w-14 h-4 bg-amber-950/40 border border-amber-900/30 rounded flex divide-x divide-amber-900/40 overflow-hidden">
                        <div className="flex-1"></div>
                        <div className="flex-1"></div>
                        <div className="flex-1"></div>
                        <div className="flex-1"></div>
                    </div>
                </div>

                <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-end items-end h-28 overflow-hidden shadow-inner">
                    <div className="text-slate-400 text-xs sm:text-sm font-mono h-6 truncate tracking-wider">
                        {expression}
                    </div>
                    <div className="font-mono font-semibold tracking-tight text-3xl sm:text-4xl text-slate-100 truncate max-w-full">
                        {display}
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    <button
                        onClick={clearDisplay}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base bg-slate-800 text-rose-400 hover:bg-slate-700 active:scale-95 active:bg-rose-600 active:text-white transition-all shadow-md cursor-pointer"
                    >
                        AC
                    </button>
                    <button
                        onClick={() => handleButtonClick('+/-')}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base bg-slate-800 text-slate-300 hover:bg-slate-700 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        +/-
                    </button>
                    <button
                        onClick={() => handleButtonClick('%')}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base bg-slate-800 text-slate-300 hover:bg-slate-700 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        %
                    </button>
                    <button
                        onClick={() => handleButtonClick('÷')}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl bg-amber-500 text-slate-950 hover:bg-amber-400 active:scale-95 active:bg-amber-300 transition-all shadow-md cursor-pointer"
                    >
                        ÷
                    </button>
                    <button
                        onClick={() => handleButtonClick('7')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        7
                    </button>
                    <button
                        onClick={() => handleButtonClick('8')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        8
                    </button>
                    <button
                        onClick={() => handleButtonClick('9')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        9
                    </button>
                    <button
                        onClick={() => handleButtonClick('×')}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl bg-amber-500 text-slate-950 hover:bg-amber-400 active:scale-95 active:bg-amber-300 transition-all shadow-md cursor-pointer"
                    >
                        ×
                    </button>
                    <button
                        onClick={() => handleButtonClick('4')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        4
                    </button>
                    <button
                        onClick={() => handleButtonClick('5')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        5
                    </button>
                    <button
                        onClick={() => handleButtonClick('6')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        6
                    </button>
                    <button
                        onClick={() => handleButtonClick('-')}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl bg-amber-500 text-slate-950 hover:bg-amber-400 active:scale-95 active:bg-amber-300 transition-all shadow-md cursor-pointer"
                    >
                        -
                    </button>
                    <button
                        onClick={() => handleButtonClick('1')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        1
                    </button>
                    <button
                        onClick={() => handleButtonClick('2')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        2
                    </button>
                    <button
                        onClick={() => handleButtonClick('3')}
                        className="py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        3
                    </button>
                    <button
                        onClick={() => handleButtonClick('+')}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl bg-amber-500 text-slate-950 hover:bg-amber-400 active:scale-95 active:bg-amber-300 transition-all shadow-md cursor-pointer"
                    >
                        +
                    </button>
                    <button
                        onClick={(value) => handleButtonClick('0')}
                        className="col-span-2 py-3 sm:py-4 rounded-2xl font-semibold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer text-center"
                    >
                        0
                    </button>
                    <button
                        onClick={() => handleButtonClick('.')}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl bg-slate-800/60 text-slate-100 hover:bg-slate-700/80 active:scale-95 active:bg-slate-600 transition-all shadow-md cursor-pointer"
                    >
                        .
                    </button>
                    <button
                        onClick={() => handleButtonClick('=')}
                        className="py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95 active:bg-emerald-300 transition-all shadow-lg shadow-emerald-600/30 cursor-pointer"
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;