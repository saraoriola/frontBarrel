import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../features/events/eventsSlice";

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { event, isLoading } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [id, dispatch]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!event) {
    return <div>No se pudo cargar el evento.</div>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <div>
        <span>{event.location}</span>
      </div>
    </div>
  );
};

export default EventDetail;
