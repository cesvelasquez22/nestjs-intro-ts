export const name = 'Cesar';
export const age = 30;
export const isMarried = true;
export const skills = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular'];
export const address = {
    city: 'Bogota',
    country: 'Colombia'
};
export const today = new Date();

export const whoami = `
    I am ${name}, I am ${age} years old, ${isMarried ? 'married' : 'single'} and I live in ${address.city}, ${address.country}.
    I have the following skills: ${skills.join(', ')}.
`;
