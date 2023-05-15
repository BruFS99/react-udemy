

describe('should have a value of searchValue', () => {
    const fn =jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'}/>)
})