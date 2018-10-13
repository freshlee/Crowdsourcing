interface IMetaType {
    name: string
}
const meta = ((state: IMetaType = {
    name: ''
}, action: any) => {
    let res: IMetaType;
    switch (action.type) {
        case ('update'):
        // tslint:disable-next-line:no-console
        console.log(action.type, 'action.type') 
            res = {
                name: '2222'
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