import React, { useState, useEffect } from "react";
import Task from "../components/Task";
import Loading from "../components/Loading";
import TaskHeader from "../components/TaskHeader";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Mytask = () => {
  const {
    isLoading,
    data: { task: Tasks },
  } = useFetch("https://taskapp-zrf3.onrender.com/api/task");
  return (
    <div>
      <TaskHeader id="top" />
      {isLoading && <Loading />}
      <div className=" container d-flex justify-content-between align-items-center mt-5">
        <div>
          <h2>My Tasks</h2>
        </div>
        <div>
          <Link to="/create" className="text-decoration-none">
            {" "}
            <p className="add">+ Add New Tasks</p>
          </Link>
        </div>
      </div>
      <div>
        {Tasks &&
          Tasks.map((t) => {
            return (
              <div>
                <Task key={t._id} {...t} />;
                
              </div>
              
            );
          })}
        <div className="d-flex justify-content-center align-items-center mt-5">
                  <a href="#top"><p className="back">Back to Top</p></a>
                    
                </div>
      </div>
    </div>
  );
};

export default Mytask;
