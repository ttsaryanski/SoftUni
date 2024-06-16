class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName,
        this.flights = [],
        this.bookings = [],
        this.bookingsCount = 0
    }

    addFlight (flightNumber, destination, departureTime, price) {
        let findFlight = this.flights.find(el => el.flightNumber === flightNumber);
        if (!findFlight) {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
        return `Flight ${flightNumber} to ${destination} is already available.`;
    }

    bookFlight (passengerName, flightNumber) {
        let findFlight = this.flights.find(el => el.flightNumber === flightNumber);
        if (!findFlight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }
        this.bookings.push({ passengerName, flightNumber });
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking (passengerName, flightNumber) {
        let findName = this.bookings.find(el => el.passengerName === passengerName && el.flightNumber === flightNumber);
        if (!findName) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }
        let idx = this.bookings.indexOf(findName);
        this.bookings.splice(idx, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings (criteria) {
        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`);
        }
        let msg = '';
        if (criteria === 'all') {
            msg += `All bookings(${this.bookingsCount}):\n`;
            let bookingsList = Array.from(this.bookings);
            for (let booking of bookingsList) {
                msg += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
            }
        } else if (criteria === 'cheap') {
            let cheapFlight = this.flights.filter(el => el.price <= 100);
            if (cheapFlight.length === 0) {
                return "No cheap bookings found.";
            }
            msg += "Cheap bookings:\n"
            let bookingsList = Array.from(this.bookings);
            for (let i = 0; i < bookingsList.length; i++) {
                for (let j = 0; j < cheapFlight.length; j++) {
                    if (bookingsList[i].flightNumber === cheapFlight[j].flightNumber) {
                        msg += `${bookingsList[i].passengerName} booked for flight ${bookingsList[i].flightNumber}.\n`;
                    }
                }
            }
        } else if (criteria === 'expensive') {
            let expFlight = this.flights.filter(el => el.price > 100);
            if (expFlight.length === 0) {
                return "No cheap bookings found.";
            }
            msg += "Expensive bookings:\n"
            let bookingsList = Array.from(this.bookings);
            for (let i = 0; i < bookingsList.length; i++) {
                for (let j = 0; j < expFlight.length; j++) {
                    if (bookingsList[i].flightNumber === expFlight[j].flightNumber) {
                        msg += `${bookingsList[i].passengerName} booked for flight ${bookingsList[i].flightNumber}.\n`;
                    }
                }
            }
        }
        return msg.trim();
    }
}




// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 100));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("cheap"));



