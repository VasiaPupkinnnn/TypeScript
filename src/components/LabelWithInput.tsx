interface LabelWithInputProps {
    type: string;
    labeltext: string;
    name: string;
    value: string;
    onChange: (input: string) => void;
}

const LabelWithInput = ({
    type,
    labeltext,
    name,
    value,
    onChange
}: LabelWithInputProps) => {
    return (
        <>
            <label>
                {labeltext}:
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
            <br />
        </>
    );
};

export default LabelWithInput;