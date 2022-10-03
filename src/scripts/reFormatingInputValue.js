export const reFormatingInputValue = (value) => {
    const valueString = String(value);
    let valueNumber = Number(valueString.replace(/\s/g, ""));
    return valueNumber
}