// Helper function to short address
export function addressSlice(address: string) {
    const userAddressStart = address.slice(0, 6);
    const userAddressEnd = address.slice(-5);
    return `${userAddressStart}...${userAddressEnd}`;
}