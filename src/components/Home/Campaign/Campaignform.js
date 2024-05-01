

export default function campaignform(){
    return(
        <div>
            <form>
                <img src="./images/campaign1.jpg" alt="ngoimage" />
                <h3>Campaign Name:</h3>
                <input type='text' name='name' placeholder='Enter Campaign Name'/><br/>
                <h2>Campaign Descriptions:</h2>
                <textarea rows='5' cols='40' name='description'></textarea>
                <h2>Required Amount</h2>
                <input type="number" name="amount" />
                <button type="submit">Submit</button>
                </form>
        </div>
    )
}