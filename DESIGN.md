# Design System Document

## 1. Overview & Creative North Star: "The Civic Editorial"
The goal of this design system is to transform the chaotic density often found in traditional service center signage into a streamlined, high-end digital experience. We are moving away from the "billboard" aesthetic—characterized by clashing logos and heavy borders—toward a concept we call **The Civic Editorial**.

This North Star prioritizes authority through whitespace and precision. It treats government-adjacent services not as a bureaucratic hurdle, but as a premium, curated journey. We break the standard "template" look by utilizing intentional asymmetry, where large typographic displays anchor the page, and interactive elements float on layered tonal surfaces rather than being boxed in by rigid lines.

---

## 2. Colors: Tonal Depth & Soul
Our palette takes the traditional "Government Blue" and expands it into a sophisticated range of depths. 

### The Palette
- **Primary (`#003e6f`) & Primary Container (`#005596`):** These represent the core authority. Use them for high-level navigation and primary actions.
- **Surface Tiers:** We use a hierarchy from `surface_container_lowest` (`#ffffff`) to `surface_container_highest` (`#e1e3e4`) to define importance.
- **Tertiary (`#791303`):** Reserved for "urgent but professional" accents, such as status alerts or signature highlights.

### Critical Visual Rules
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To separate a header from a body or a sidebar from a main view, use background shifts. For example, a `surface_container_low` sidebar should sit against a `surface` background.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of fine paper. A search bar might be `surface_container_lowest` (white) nested inside a `surface_container` (light grey) header to create a natural, "inset" look.
*   **The "Glass & Gradient" Rule:** To provide "soul," use subtle gradients for Hero sections, transitioning from `primary` to `primary_container`. For floating utility panels, apply a `surface` color with 80% opacity and a `backdrop-blur` of 20px.
*   **Signature Textures:** Avoid flat, dead colors. Use the `surface_tint` at low opacities to "wash" background sections, giving them a slight blue-leaning warmth that feels more established than neutral grey.

---

## 3. Typography: Authoritative Clarity
We pair **Public Sans** (Display/Headlines) with **Inter** (Body/Labels) to balance institutional stability with modern readability.

*   **Display & Headlines (Public Sans):** These are your "Editorial Anchors." Use `display-lg` (3.5rem) with tighter letter-spacing for landing page headers to convey an established presence.
*   **Body & Titles (Inter):** Chosen for its exceptional legibility at small sizes. `body-md` (0.875rem) is our workhorse for service descriptions and form labels.
*   **The Hierarchy Goal:** By using a massive scale contrast—placing a `display-sm` headline next to `label-md` metadata—we create an "Editorial" feel that guides the eye naturally through complex information without the need for visual "clutter" like icons or dividers.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is felt, not seen. We reject the heavy shadows and stark outlines of traditional web design.

*   **The Layering Principle:** Stacking is our primary tool. A `surface_container_lowest` card placed on a `surface_container_low` background creates a "soft lift." This mimics natural light falling on stacked documents.
*   **Ambient Shadows:** Use shadows only for floating elements (modals/dropdowns). Shadows must use the `on_surface` color at 4-6% opacity with a blur radius of at least 32px. This creates an "ambient glow" rather than a hard drop shadow.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at 15% opacity. It should be a suggestion of a boundary, never a hard cage.
*   **Glassmorphism:** Use semi-transparent layers for navigation bars. As the user scrolls, the background colors of different sections should bleed through the blurred `primary_container` or `surface` nav, making the experience feel fluid and integrated.

---

## 5. Components: Minimalist Primitives
Components are defined by their "Roundedness Scale," using `md` (0.375rem) for most interactive elements to maintain a professional, slightly sharp edge.

*   **Buttons:**
    *   *Primary:* `primary` background, `on_primary` text. No border.
    *   *Secondary:* `secondary_container` background.
    *   *Tertiary:* Ghost style. No background, just `primary` text.
*   **Input Fields:** Use the `surface_container_highest` for the background of the input area. On focus, transition the "Ghost Border" to 100% opacity of the `primary` token.
*   **Cards & Lists:** **Strictly forbid divider lines.** Use `2rem` of vertical whitespace to separate list items. If items must be grouped, use a very subtle `surface_container_low` background for every other item (zebra striping) but keep the transitions soft.
*   **Chips:** Use `full` roundedness (9999px) and `secondary_fixed` backgrounds. These should feel like small, tactile "pills" used for filtering service categories (e.g., "Aadhaar," "Banking," "Insurance").
*   **Service Tiles (Custom Component):** Instead of standard cards, use large-format tiles with `headline-sm` typography and a `surface_container_low` background that shifts to `primary_fixed` on hover.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Anchor your text to the left with wide right margins to create breathing room.
*   **Do** use `primary_fixed` for background washes on sections that require the user's focus.
*   **Do** prioritize "Public Sans" for any number-heavy data to maintain the "Official" feel.
*   **Do** use high-quality, desaturated photography of local architecture or service interactions, layered behind semi-transparent `surface` overlays.

### Don't
*   **Don't** use 1px solid dividers or #000000 shadows.
*   **Don't** crowd the interface. If a service center has 20 services, do not list them all at once; use a "Curated" approach with categories.
*   **Don't** use "Alert Red" for everything. Use the `tertiary` (`#791303`) for a more sophisticated, "Administrative" warning.
*   **Don't** use the `full` roundedness on anything except Chips and Buttons. We want the system to feel "Established," and overly round corners can feel too casual or "bubbly."