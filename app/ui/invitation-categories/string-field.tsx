export default function StringField({
    fieldVal,
    handleClick
}: {
    fieldVal: string,
    handleClick: () => void,
}) {
    return (
        <span
            className="absolute underline underline-offset-4 decoration-blue-500 hover:cursor-pointer"
            onClick={handleClick}
        >
            {fieldVal}{' '}
        </span>
    );
};