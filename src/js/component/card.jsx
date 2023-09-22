import React from "react";

export function Card() {
    return (
        <div className="card text-center ms-2" style={{ width: "14rem", height: "24rem", }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWn1ghGmD0sv-nTOh9KM1sVHCh5VvAgbjRsjgL5Cyiw&s" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsun dolor sit amet, consectetur adipisicing elit, Ipsa, Ipsam, eligendi.</p>
                <div class="card-footer">
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
