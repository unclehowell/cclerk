import { createFileRoute } from "@tanstack/react-router";
import { ComparisonView } from "@/components/comparison-view";

export const Route = createFileRoute("/")({ component: ComparisonView });
