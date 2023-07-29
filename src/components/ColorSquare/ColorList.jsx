import ColorSquare from "@/components/ColorSquare/ColorSquare";

export default function ColorList ({colors}) {
    const colorsToRender = colors?.slice(0, 3);
    return (
        <div>
            {colorsToRender.map((color, index) => (
                <ColorSquare key={index} color={color}/>))
            }
        </div>
    );
};