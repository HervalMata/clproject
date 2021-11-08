interface IDateProvider {
    addDays(days: number, reference_date: Date): Date;
    checkIsBefore(start_date: Date, end_date: Date): Boolean;
    dateNow();
    addHours(hours: number, reference_date: Date): Date;
    minusYears(years: number, reference_date: Date): Date;
}

export { IDateProvider };