import tripModel from '../model/tripModel.js';

const getRouteById = (req, res) => {
    const origin = req.query.departure_airport_iata;
    const destin = req.query.arrival_airport_iata;

    const trip = tripModel.getRouteById(origin, destin);
    res.json(trip);
}

export default { getRouteById }