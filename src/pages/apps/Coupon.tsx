import { FormEvent, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allSymbols = "!@#$%^&*()_+";
const allNumbers = "123456789";

const Coupon = () => {
    const [size, setSize] = useState<number>(8);
    const [prefix, setPrefix] = useState<string>("");
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const [coupon, setCoupn] = useState<string>();

    const copyText = async (coupon: string) => {
        await window.navigator.clipboard.writeText(coupon);
        setIsCopied(true);
    };
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!includeNumbers && !includeCharacters && !includeSymbols)
            return alert("Please Select One Atleast");
        let result: string = prefix || "";
        const loopLength: number = size - result.length;

        for (let i = 0; i < loopLength; i++) {
            let entireString: string = "";

            if (includeCharacters) entireString += allLetters;
            if (includeSymbols) entireString += allSymbols;
            if (includeNumbers) entireString += allNumbers;

            const randomNum: number = ~~(Math.random() * entireString.length);
            result += entireString[randomNum];
        }

        setCoupn(result);
    };

    useEffect(() => {
        setIsCopied(false);
    }, [coupon]);

    return (
        <div className="admin-container">
            <Sidebar />
            <main className="app-container">
                <h1>Generate Coupon</h1>
                <section>
                    <form
                        action=""
                        className="coupon-form"
                        onSubmit={submitHandler}
                    >
                        <input
                            type="text"
                            placeholder="Text to Include"
                            value={prefix}
                            onChange={(e) => setPrefix(e.target.value)}
                            maxLength={size}
                        />
                        <input
                            type="number"
                            placeholder="Coupn Length"
                            value={size}
                            onChange={(e) => setSize(Number(e.target.value))}
                            min={8}
                            max={25}
                        />

                        <fieldset>
                            <legend>Include</legend>
                            <input
                                id="numbers"
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={() =>
                                    setIncludeNumbers((prev) => !prev)
                                }
                            />
                            <label htmlFor="numbers">Numbers</label>

                            <input
                                id="symbols"
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={() =>
                                    setIncludeSymbols((prev) => !prev)
                                }
                            />
                            <label htmlFor="symbols">Symbols</label>

                            <input
                                id="characters"
                                type="checkbox"
                                checked={includeCharacters}
                                onChange={() =>
                                    setIncludeCharacters((prev) => !prev)
                                }
                            />
                            <label htmlFor="characters">Characters</label>
                        </fieldset>
                        <button type="submit">Generate</button>
                    </form>

                    {coupon && (
                        <code>
                            {coupon}
                            <span onClick={() => copyText(coupon)}>
                                {isCopied ? "Copied" : " Click to Copy"}
                            </span>
                        </code>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Coupon;
