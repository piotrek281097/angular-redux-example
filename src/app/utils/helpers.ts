export class Helpers {

    static addOrIncreaseParam(data: any[], newItem: any, param: string) {
        const found = data.find(item => item.id === newItem.id);
        return [...found
            ? data.map(item => item === found
                ? { ...found, [param]: found[param] + 1 }
                : item)
            : [...data, { ...newItem, [param]: 1 }]
        ]
    }


    static removeOrReduceParam(data: any[], itemToDelete: any, param: string) {
        const found = data.find(item => item.id === itemToDelete.id);
        return found[param] === 1
            ? data.filter(item => item !== found)
            : data.map(item => item === found
                ? { ...found, [param]: found[param] - 1 }
                : item);
    }
}

