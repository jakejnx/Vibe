import React from 'react';

const BlankPage = () => {
  return (
    <div>
      A search page for patients, table for results, stats

      <table class="table table-hover">
      <thead class="thead-dark">
    <tr>
      <th scope="col">Pt No</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">DoB</th>
      <th scope="col">Mobile</th>
      <th scope="col">Last Visit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>07/11/2019</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Thornton</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

    </div>
  );
};

export default BlankPage;