import { RouteComponentProps } from "@reach/router";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../stores";
import * as d3 from "d3";

interface IProps extends RouteComponentProps { }

const Plot = (props: IProps) => {
  const { graphStore: { isLoading, graph, loadGraph, graphJSON } } = useContext(StoreContext);
  const svgRef = React.useRef(null);
  const width = 460
  const height = 460
  const margin = 16;

  const svgWidth = width + margin + margin;
  const svgHeight = height + margin + margin;

  useEffect(() => {
    loadGraph();
  }, []);

  useEffect(() => {
    if (!graph) return;

    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove();
    const svg = svgEl
      .append("g")
      .attr("transform", `translate(${margin})`);

    const cluster = d3.cluster()
      .size([height, width - margin]);  // 100 is the margin I will have on the right side

    const root = d3.hierarchy(graph, function (d) {
      return d.childs;
    });

    cluster(root);

    svg.selectAll('path')
      .data(root.descendants().slice(1))
      .join('path')
      .attr("d", function (d: any) {
        return "M" + d.y + "," + d.x
          + "C" + (d.parent.y + 50) + "," + d.x
          + " " + (d.parent.y + 150) + "," + d.parent.x // 50 and 150 are coordinates of inflexion, play with it to change links shape
          + " " + d.parent.y + "," + d.parent.x;
      }
      )
      .style("fill", 'none')
      .attr("stroke", '#ccc')

    svg.selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", function (d: any) {
        return `translate(${d.y},${d.x})`
      })
      .append("circle")
      .attr("r", 7)
      .style("fill", "#69b3a2")
      .attr("stroke", "black")
      .style("stroke-width", 2)

  }, [graph]);

  return (
    <div>
      <p>plot component</p>
      <svg ref={svgRef} width={svgWidth} height={svgHeight} />
    </div>
  );
}

export default observer(Plot);
