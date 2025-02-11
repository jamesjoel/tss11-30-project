import * as YUP from 'yup'

let BookingSchema = YUP.object({
    date : YUP.string().required("Insert Booking Date"),
    time : YUP.string().required("Insert Booking Time"),
    tables : YUP.string().required("Insert Booking Table"),
   
})

export default BookingSchema;