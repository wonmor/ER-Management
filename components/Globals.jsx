export const capitalizeName = (name) => {
    return name.replace("-", " ").replace(/\b(\w)/g, s => s.toUpperCase());
}

export const applyFileNamingScheme = (name) => {
    return name.replace(" ", "-").toLowerCase();
}