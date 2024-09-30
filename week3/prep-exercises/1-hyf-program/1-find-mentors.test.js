import { findMentorForModule, possibleMentorsForModule } from "./1-find-mentors"

describe('Find mentors prep exersice', () => {

    it('Canary', () => {
        expect(true).toBe(true)
    })

    it('finds mentors for module', () => {
        const input = 'javascript'
        const result = findMentorForModule(input)
        expect(typeof result).toBe('string')
    })

    test('finds possible mentors', () => {
        const input = 'browsers'
        const result = possibleMentorsForModule(input)
        const expected = ['Stas', 'Collin']
        expect(expected).toEqual(expected)
    })



})