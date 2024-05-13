import { getAllIdentities, getIdentityById, registerIdentity } from "./baseApi";

export const getAllBooking = async () => {
  return await getAllIdentities("/bookings/");
};

export const getAllBookingByCoachId = async (coachId) => {
  const allbookings = await getAllBooking();
  console.log(allbookings);
  const matchedBookings = [];
  allbookings.forEach((booking) => {
    if (booking.coachId === coachId) matchedBookings.push(booking);
  });
  console.log(matchedBookings);
  return matchedBookings;
};

export const getAllBookingByUserId = async (userId) => {
  const allbookings = await getAllBooking();
  const matchedBookings = [];
  allbookings.forEach((booking) => {
    if (booking.userId === userId) matchedBookings.push(booking);
  });
  console.log(matchedBookings);
  return matchedBookings;
};

export const getBookingById = async (id) => {
  return await getIdentityById("/bookings/", id);
};

export const registerBooking = async (payload) => {
  return await registerIdentity("/bookings/", payload);
};
