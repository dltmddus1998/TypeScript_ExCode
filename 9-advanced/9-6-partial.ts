{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };
    
    // partial을 통해 todo 타입에 있는 것들 중 부분적인 것들만 받을 수 있다.
    function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return {...todo, ...fieldsToUpdate}
    }

    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    };

    const updated = updateToDo(todo, {priority: 'low'});
    
    console.log(updated);
    // {
    //     title: 'learn TypeScript',
    //     description: 'study hard',
    //     label: 'study',
    //     priority: 'low'
    // }
}