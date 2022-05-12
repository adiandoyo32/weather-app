export const dateIsoToDate = (dateIso: string): string => {
    if (!dateIso) return ''
    var date = new Date(dateIso);
    return date.toLocaleDateString();
};
