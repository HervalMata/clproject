interface IDateProvider {
    addDays(days: number, reference_date: Date): Date;
    checkIsBefore(start_date: Date, end_date: Date): Boolean;
    dateNow();
}

export { IDateProvider };