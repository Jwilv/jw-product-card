import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProductImg } from "../../src/components";
import React from "react";


describe('ProductImg', () => {

    afterEach(cleanup);

    it('render for ProductImg', () => {
        const wrapper = render(<ProductImg img="img.jpg" />)
        expect(wrapper).toMatchSnapshot()
    });


});