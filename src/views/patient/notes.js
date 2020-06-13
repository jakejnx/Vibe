import React from 'react';

export default function SubNav() {
//   return <SubNavigation navList={NAV} />;
// }

  return (
  <div>

    <p class="text-right">
        <div class="btn-group" role="group" aria-label="Consult Bar">
  <button type="button" class="btn btn-dark">New Note</button>
  <button type="button" class="btn btn-dark">Order Tests</button>
  <button type="button" class="btn btn-dark">Prescription</button>
<button type="button" class="btn btn-dark">Coding</button>
</div></p>
    <div>
      <div class="row">
    <div class="col-3">
    <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
  <small>13/06/2020 > Nurse JJ</small>
  <br></br>
Checkup    
  </a>
  <a href="#" class="list-group-item list-group-item-action"><small>09/01/2020 > RN EP</small><br></br>Note</a>
  <a href="#" class="list-group-item list-group-item-action"><small>09/01/2020 > HA MC</small><br></br>Follow Up</a>
  <a href="#" class="list-group-item list-group-item-action"><small>09/01/2020 > DR LC</small><br></br>Symptomatic</a>
  <a href="#" class="list-group-item list-group-item-action"><small>09/01/2020 > HCA GT</small><br></br>Outreach Service</a>
</div>

    </div>
    <div class="col-9">  
    <div class="card">
  <div class="card-body">
        The Details of the Note would show here.
  </div>
</div>
</div>
    </div>
  </div>
    </div>
  )
}