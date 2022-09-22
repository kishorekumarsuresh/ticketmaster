import { render } from "@testing-library/react";
import Details from "../Details";

describe("testing for details page",() => {
  test('checking event details in screen',() =>{
    const comp = render(<Details/>)
    expect(comp.getByText("EVENT DETAILS")).toBeInTheDocument()
  })
})
