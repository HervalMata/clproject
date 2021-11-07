import {IDateProvider} from "../IDateProvider";
import dayjs from "dayjs";

class DayjsDateProvider implements IDateProvider {

    addDays(days: number, reference_date: Date = null): Date {
        const date = reference_date ? dayjs(reference_date) : dayjs();
        return date.add(days, "day").toDate();
    }

    checkIsBefore(start_date: Date, end_date: Date): Boolean {
        return dayjs(start_date).isBefore(end_date);
    }

    dateNow() {
        return dayjs().toDate();
    }

    addHours(hours: number, reference_date: Date): Date {
        const date = reference_date ? dayjs(reference_date) : dayjs();
        return date.add(hours, "hour").toDate();
    }

}

export { DayjsDateProvider };