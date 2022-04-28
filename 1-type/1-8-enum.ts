{
    /*  
    * enum
    */
    // TS
    enum Days {
        Monday = 1,
        Tuesday,
        WednesDay,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    // console.log(Days.Saturday);
    const day = Days.Saturday;
    console.log(day); // 5
    

    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfweek: DaysOfWeek = 'Tuesday';
    dayOfweek = 'Monday';
}