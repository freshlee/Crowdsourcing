interface IMetaType {
    name: string
}
const meta = ((state: IMetaType = {
    name: '首页'
}, action: any) => {
    let res: IMetaType;
    switch (action.type) {
        case ('update'):
            res = {
                name: action.text
            }
            break;
        case ('delete'):
            res= {
                name: ''
            }
            break;
        default:
            res = state
    }
    return res
})

export default meta