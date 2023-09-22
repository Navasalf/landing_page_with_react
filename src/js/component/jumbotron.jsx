import React from "react";

export function Jumbotron() {
    return (
        <div className="container bg-light-subtle  mb-4">
            <div className="jumbotron bg-light-subtle" style={{ backgroundColor: "#d2d2d2", padding: "20px", width: "100%" }}>
                <h1 className="m-3">A warm Welcome</h1>
                <p className="m-3">Lorem ipsun dolor sit amet, consectetur adipisicing elit, Ipsa, Ipsam, eligendi, in quo sunt possimus non incidunt odit vero, aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>

                <button type="button" class="btn btn-primary btn-lg m-3">call to action!</button>
            </div>
        </div>

    )
}