import * as React from "react";

import { TreeNodeProps } from "./TreeNode";

export interface TreeProps {
  /**
   * The height of the line
   */
  lineHeight?: string;
  /**
   * The width of the line
   */
  lineWidth?: string;
  /**
   * The color of the line
   */
  lineColor?: string;
  /**
   * The border radius of the line
   */
  lineBorderRadius?: string;
  /**
   * The padding between siblings
   */
  nodePadding?: string;
  children: TreeNodeProps["children"];
}

/**
 * The root of the hierarchy tree
 */
export function Tree({
  children,
  lineHeight = "20px",
  lineWidth = "1px",
  lineColor = "black",
  nodePadding = "5px",
  lineBorderRadius = "5px",
}: TreeProps) {
  return (
    <ul className={"tree-container"}>
      {children}
      <style jsx>{`
        .tree-container {
          padding-inline-start: 0;
          margin: 0;
          display: flex;

          --line-height: ${lineHeight};
          --line-width: ${lineWidth};
          --line-color: ${lineColor};
          --line-border-radius: ${lineBorderRadius};
          --node-padding: ${nodePadding};

          --tree-line-height: var(--line-height, 20px);
          --tree-line-width: var(--line-width, 1px);
          --tree-line-color: var(--line-color, black);
          --tree-line-border-radius: var(--line-border-radius, 5px);
          --tree-node-padding: var(--node-padding, 5px);
        }
      `}</style>
    </ul>
  );
}
