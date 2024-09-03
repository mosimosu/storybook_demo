import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconButton from "./index";

describe("IconButton", () => {
    it("renders with default props", () => {
        render(<IconButton icon="test-icon" text={""} color={"Primary"} />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("MuiButton-root");
    });

    it("applies custom className", () => {
        render(
            <IconButton
                icon="test-icon"
                className="custom-class"
                text={""}
                color={"Primary"}
            />
        );
        const button = screen.getByRole("button");
        expect(button).toHaveClass("custom-class");
    });

    it("renders with custom size", () => {
        render(
            <IconButton
                icon="test-icon"
                size="large"
                text={""}
                color={"Primary"}
            />
        );
        const button = screen.getByRole("button");
        expect(button).toHaveClass("MuiButton-sizeLarge");
    });

    it("renders with custom color", () => {
        render(<IconButton icon="test-icon" color="Primary" text={""} />);
        const button = screen.getByRole("button");
        expect(button).toHaveClass("MuiButton-colorSecondary");
    });

    it("renders with custom variant", () => {
        render(
            <IconButton
                icon="test-icon"
                variant="outlined"
                text={""}
                color={"Primary"}
            />
        );
        const button = screen.getByRole("button");
        expect(button).toHaveClass("MuiButton-outlined");
    });

    it("renders with disabled state", () => {
        render(
            <IconButton icon="test-icon" disabled text={""} color={"Primary"} />
        );
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    });

    it("renders with custom children", () => {
        render(
            <IconButton icon="test-icon" text={""} color={"Primary"}>
                Custom Text
            </IconButton>
        );
        expect(screen.getByText("Custom Text")).toBeInTheDocument();
    });

    it("renders with custom children", () => {
        render(
            <IconButton icon="test-icon" text="Custom Text" color="Primary">
                Custom Text
            </IconButton>
        );
        expect(screen.getByText("Custom Text")).toBeInTheDocument();
    });
});
