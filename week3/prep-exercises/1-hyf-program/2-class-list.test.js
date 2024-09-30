import { getPeopleOfClass, getActiveClasses } from "./2-class-list"

test('gives both mentor and students participating in module', () => {
    const moduleName = 'class35'    
    const result = getPeopleOfClass(moduleName)
    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({name: 'Wouter', role: 'student'})
        ])
    )


})

test('returns active classes', () => {
    const result = getActiveClasses()
    expect(result).toHaveProperty('class34')
    expect(result).toHaveProperty('class35')
    expect(result).toHaveProperty('class36')

})