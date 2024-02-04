import {
    AiOutlineSortAscending,
    AiOutlineSortDescending,
} from "react-icons/ai";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import {
    Column,
    TableOptions,
    useTable,
    useSortBy,
    usePagination,
} from "react-table";

function TableHOC<T extends object>(
    columns: Column<T>[],
    data: T[],
    containerClassName: string,
    heading: string,
    showPagination: boolean = false
) {
    return function HOC() {
        const options: TableOptions<T> = {
            columns,
            data,
            initialState: {
                pageSize: 6,
            },
        };

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            page,
            prepareRow,
            nextPage,
            previousPage,
            canNextPage,
            canPreviousPage,
            pageCount,
            state: { pageIndex },
            gotoPage
        } = useTable(options, useSortBy, usePagination);

        return (
            <div className={containerClassName}>
                <h2 className="heading">{heading}</h2>

                <table
                    className="table"
                    {...getTableProps()}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                    >
                                        {column.render("Header")}
                                        {column.isSorted && (
                                            <span>
                                                {" "}
                                                {column.isSortedDesc ? (
                                                    <AiOutlineSortDescending />
                                                ) : (
                                                    <AiOutlineSortAscending />
                                                )}
                                            </span>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {showPagination && (
                    <div className="pagination-btns">
                        <button
                            disabled={!canPreviousPage}
                            onClick={() => gotoPage(0)}
                        >
                            <RxDoubleArrowLeft />
                        </button>
                        <button
                            disabled={!canPreviousPage}
                            onClick={previousPage}
                        >
                            <MdArrowBack />
                        </button>
                        <span>{`${pageIndex + 1} of ${pageCount}`}</span>
                        <button
                            disabled={!canNextPage}
                            onClick={nextPage}
                        >
                            <MdArrowForward />
                        </button>
                        <button
                            disabled={!canNextPage}
                            onClick={() => gotoPage(pageCount - 1)}
                        >
                            <RxDoubleArrowRight />
                        </button>
                    </div>
                )}
            </div>
        );
    };
}

export default TableHOC;
