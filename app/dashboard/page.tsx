"use client";
import { Table } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Issue {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const Dashboard = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/issues");
        setIssues(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>N</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Updated At</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map((issue, index) => (
          <Table.Row key={issue.id}>
            <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
            <Table.Cell>{issue.title}</Table.Cell>
            <Table.Cell>{issue.description}</Table.Cell>
            <Table.Cell>{issue.status}</Table.Cell>
            <Table.Cell>{issue.createdAt}</Table.Cell>
            <Table.Cell>{issue.updatedAt}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default Dashboard;
