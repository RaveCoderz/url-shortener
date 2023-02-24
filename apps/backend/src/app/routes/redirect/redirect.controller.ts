import { Controller, Get, Param, Res } from '@nestjs/common';
import { LinksService } from '../api/links/links.service';

@Controller()
export class RedirectController {
  constructor(private readonly linksService: LinksService) {}

  @Get(':linkCode')
  async findOne(@Param('linkCode') linkCode: string, @Res() res) {
    if (!linkCode) return 'You need to specify correct ID!';
    const link = await this.linksService.findOneByCode(linkCode);

    if (link && link !== null) {
      res.status(200).redirect(link.url);
    } else {
      res.status(404);
    }
  }
}
