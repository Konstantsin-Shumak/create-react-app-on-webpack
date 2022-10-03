export const reFormatingInputValue = (value) => {
    const valueString = String(event.target.value);
    let valueNumber = Number(valueString.replace(/\s/g, ""));
    return valueNumber
}