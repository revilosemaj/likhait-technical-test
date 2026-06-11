import React from "react";
import { TextField, Button } from "../vibes";
import { useCategoryForm } from "../hooks/useCategoryForm";
import { CategoryFormData } from "../types";

interface CategoryFormProps {
  onSubmit: (data: CategoryFormData) => Promise<void>;
  onCancel: () => void;
  submitLabel?: string;
}

export function CategoryForm({
  onSubmit,
  onCancel,
  submitLabel = "Add Category",
}: CategoryFormProps) {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useCategoryForm({ onSubmit });

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.5rem",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <TextField
        label="Category Name"
        type="text"
        placeholder="e.g. Subscriptions"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        fullWidth
        required
      />
      <div style={buttonGroupStyle}>
        <Button type="submit" variant="primary" disabled={isSubmitting} fullWidth>
          {isSubmitting ? "Submitting..." : submitLabel}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
