let calculatorNumbersArray = [
    {
        number: "1",
        value: 1,
        id: "one",
    },
    {
        number: "2",
        value: 2,
        id: "two",
    },
    {
        number: "3",
        value: 3,
        id: "three",
    },
    {
        number: "4",
        value: 4,
        id: "four",
    },
    {
        number: "5",
        value: 5,
        id: "five",
    },
    {
        number: "6",
        value: 6,
        id: "six",
    },
    {
        number: "7",
        value: 7,
        id: "seven",
    },
    {
        number: "8",
        value: 8,
        id: "eight",
    },
    {
        number: "9",
        value: 9,
        id: "nine",
    },
    {
        number: "0",
        value: 0,
        id: "zero",
    }
]

let calculatorMathBtnArr = [
    {
        sign: "=",
        id: "equals",
    },{
        sign: "+",
        id: "add",
    },
    {
        sign: "-",
        id: "subtract",
    },
    {
        sign: "*",
        id: "multiply",
    },
    {
        sign: "/",
        id: "divide",
    },
    {
        sign: ".",
        id: "decimal",
    }
]

const App = () => {
    return (
        <div className="main">
            <div className="text-center">
                <h2>JavaScript Calculator</h2>
                <div id="display">
                    
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"));
