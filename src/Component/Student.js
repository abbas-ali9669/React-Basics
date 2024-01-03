import "./StudentStyle.css";
function Student() {
    return (
        <div>
            <form>
                <div>
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div>
                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname" />
                </div>
                <div>
                    <label for="age">Age:</label>
                    <input type="text" id="age" name="age" />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                <div>
                    <label for="address">Address:</label>
                    <textarea id="address" name="address" defaultValue={""} />
                </div>
                <div>
                    <input type="submit" defaultValue="Submit" />
                </div>
            </form>

        </div>
    )
}

export default Student;