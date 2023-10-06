import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyBookings } from '../../../features/bookings/bookingsSlice';

const Bookings = () => {
  const dispatch = useDispatch();
  const userBookings = useSelector((state) => state.bookings.userBookings);

  useEffect(() => {
    dispatch(getMyBookings());
  }, [dispatch]);

  return (
    <div>
      <h1>Mis Reservas</h1>
      <ul>
        {userBookings.map((booking) => (
          <li key={booking.id}>
            <h2>Reserva</h2>
            <p>Estado: {booking.status}</p>
            <p>Descripción: {booking.description}</p>
            <h2>Evento Asociado</h2>
            <p>Título del evento: {booking.Event.title}</p>
            <p>Fecha del evento: {booking.Event.date}</p>
            <p>Ubicación del evento: {booking.Event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
