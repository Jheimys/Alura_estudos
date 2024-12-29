
class DataTable:
    """Representa uma Tabela de dados.
    Essa classe representa uma tabela de dados do portal
    da transparência. Deve ser capaz de validar linhas
    inseridas de acordo com as colunas que possui. As
    linhas inseridas ficam registradas dentro dela.
    Attributes:
    name: Nome da tabela
    columns: [Lista de colunas]
    data: [Lista de dados]
    """
    def __init__(self, name):
        """Construtor
        Args:
        name: Nome da Tabela
        """
        self._name = name
        self._columns = []
        self._data = []

    def add_column(self, name, kind, description):
        column = Column(name, kind, description)
        self._columns.append(column)
        return column

    @property
    def data(self):
        return self._data


class Column:

    """Representa uma coluna em um DataTable
    Essa classe contém as informações de uma coluna
    e deve validar um dado de acordo com o tipo de
    dado configurado no construtor.
    Attributes:
    name: Nome da Coluna
    king: Tipo do Dado (varchar, bigint, numeric)
    description: Descrição da coluna
    """

    def __init__(self, name, kind, description=''):

        """Construtor
        Args:
        name: Nome da Coluna
        kind: Tipo do dado (varchar, bigint, numeric)
        description: Descrição da coluna
        """

        self._name = name
        self._kind = kind
        self._description = description


class Relationship:

    """Classe que representa um relacionamento entre DataTables
    Essa classe tem todas as informações que identificam um
    relacionamento entre tabelas. Em qual coluna ele existe,
    de onde vem e pra onde vai.
    """

    def __init__(self, name, _from, to, on):

        """Construtor
        Args:
        name: Nome
        from: Tabela de onde sai
        to: Tabela pra onde vai
        on: instância de coluna onde existe
        """

        self._name = name
        self._from = _from
        self._to = to
        self._on = on




table = DataTable("TabelaTeste")

print(table.data)
print(DataTable.__doc__)
