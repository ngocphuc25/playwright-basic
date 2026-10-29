import { test, expect } from "@playwright/test"
import * as z from "zod";

const bookingSchema = z.object({
    bookingid: z.number(),
})

const bookingsSchema = z.array(bookingSchema)


/**
 * verify single endpoint
 *
 * verify input:
 *  method
 *  headers
 *       invalid
 *      missing
 *  payload
 *      invalid
 *      missing
 *
 * verify response
 *  status code
 *  response body
 *      - body schema
 *      - value
 */

test("get all booking", async ({ request }) => {
    const reps = await request.get('https://restful-booker.herokuapp.com/booking');

    expect(reps.status()).toBe(200);
    const responseBody = await reps.json()
    const bookingSchema = z.object({
        bookingid: z.number(),
    })
    const bookingsSchema = z.array(bookingSchema)

    expect(bookingsSchema.parse(responseBody)).toBeTruthy()
})

test("get booking by id", async ({ request }) => {
    //get random booking ID
    const allBookingRes = await request.get('https://restful-booker.herokuapp.com/booking');
    const allBookingIds = await allBookingRes.json()
    const bookingID = allBookingIds[Math.floor(Math.random() * allBookingIds.length)].bookingid

    const reps = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`)
    expect(reps.status()).toBe(200);
    const responseBody = await reps.json()
    const bookingInfoSchema = z.object({
        firstname: z.string(),
        lastname: z.string(),
        totalprice: z.number(),
        depositpaid: z.boolean(),
        bookingdates: z.object({
            checkin: z.string(),
            checkout: z.string()
        })

    })
    expect(bookingInfoSchema.parse(responseBody)).toBeTruthy()

    //extract json object
    const { firstname, lastname } = responseBody
    console.log(`${firstname} ${lastname}`)

})