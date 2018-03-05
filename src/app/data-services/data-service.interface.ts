export interface DataService {
    /** Opens the connection with the database. */
    openConnection();
    /** Closes the connection with the database. */
    closeConnection();
}
