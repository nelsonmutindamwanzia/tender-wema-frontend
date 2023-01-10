import React from "react";


function SupSearchBar() {
    return (
            <div className="input-group">
                <div className="form-outline">
                    <input type="search" class="form-control" />
                    <label className="form-label" for="form1">Search</label>
                </div>
                <button type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>
    )
}
export default SupSearchBar;