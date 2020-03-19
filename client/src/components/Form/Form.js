import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <form>
      <div className="form-group">
          <label className="SummonerSearchLabel"><h3>Search your summoner</h3></label>
          <br></br>
          <input className="col-12 form-control"
              value={props.search}
              type="text"
              name="searchSummoner"
              placeholder="KnightCuddles"
              onChange={props.handleInputChange}
          />
      </div>
      <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
          Submit
      </button>
    </form>
  )
};

export default Form;
